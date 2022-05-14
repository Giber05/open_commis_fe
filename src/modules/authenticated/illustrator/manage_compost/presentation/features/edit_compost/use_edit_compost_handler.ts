import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchError } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { CategoryModel } from "../../../../../../common/commission/data/models/category_model";
import { TagModel } from "../../../../../../common/commission/data/models/tag_model";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { CommissionPostDetail } from "../../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";
import { GetCategories } from "../../../../../../guest/commission_post/domain/usecases/get_categories";
import { CreateComPost } from "../../../domain/usecases/create_compost";
import { CreateTag } from "../../../domain/usecases/create_tag";
import { EditComPost } from "../../../domain/usecases/edit_compost";
import { GetTags } from "../../../domain/usecases/get_tags";
import { fetchCategories, fetchTags, mergeTags, selectEditComPost, setIsLoading, setIsLoadingTag } from "../../reducers/edit_compost_slice";
import { selectIllustratorsComPosts } from "../../reducers/illustrators_compost_slice";

type EditComPostController = {
  isLoading: boolean;
  isLoadingTag: boolean;
  tags: TagModel[];
  getTags: () => void;
  createTag: (tagName: string) => void;
  categories: CategoryModel[];
  getCategories: () => void;
  editComPost: (event: any) => void;
  commissionPostDetail: CommissionPostDetail | null;
};

function useEditComPostHandler(): EditComPostController {
  const dispatch = useAppDispatch();
  const { isLoading, tags, isLoadingTag, categories } = useSelector(selectEditComPost);
  const { commissionPostDetail } = useSelector(selectIllustratorsComPosts);
  const { authUser } = useSelector(selectAuth);
  const navigate = useNavigate();
  const getTagsUC = new GetTags();
  const createTagUC = new CreateTag();
  const getCategoriesUC = new GetCategories();
  const editComPostUC = new EditComPost();
  const { compostId } = useParams();
  let id = parseInt(compostId!);
  const key = "updatable";

  const getTags = () => {
    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await getTagsUC.execute();

      dispatch(setIsLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchTags(value.data));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };
  const getCategories = () => {
    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await getCategoriesUC.execute();

      dispatch(setIsLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchCategories(value.data));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };

  const createTag = (tagName: string) => {
    message.loading({ content: "Membuat tag baru ...", });

    dispatch(setIsLoadingTag(true));
    setTimeout(async () => {
      const resource = await createTagUC.execute({ token: authUser?.data.token!, tagName: tagName });

      dispatch(setIsLoadingTag(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(mergeTags(value.data));
          message.success({ content: "Tag berhasil dibuat",  duration: 2 });

          dispatch(fetchError(""));
        },
        error: (error) => {
          message.error({ content: "Tag gagal dibuat ",  duration: 2 });

          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };
  const editComPost = (event: any) => {
    message.loading({ content: "Loading...", key });
    let imageFiles = event.upload_image.map((file: any) => file.originFileObj);
    let commission = event.compost;

    const formData = new FormData();
    imageFiles.map((image: any, index: any) => {
      let i = index + 1;
      formData.append("image_" + i, image);
    });

    formData.append("title", commission.name);
    formData.append("description", commission.description);
    formData.append("duration", commission.duration.toString());
    formData.append("price", commission.price.toString());
    formData.append("category", commission.category);
    commission.tags.forEach((tag: any) => {
      formData.append("tags[]", tag.toString());
    });

    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await editComPostUC.execute({
        token: authUser?.data.token!,
        formData: formData,
        compostId: id,
      });

      dispatch(setIsLoading(false));
      resource.whenWithResult({
        success: (value) => {
          message.success({ content: value.data.message, key, duration: 2 });

          navigate("/manage/manage-compost");
          dispatch(fetchError(""));
        },
        error: (error) => {
          message.error({ content: error.exception.message, key, duration: 2 });

          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };

  return {
    isLoading,
    tags,
    getTags,
    createTag,
    isLoadingTag,
    getCategories,
    categories,
    editComPost,
    commissionPostDetail,
  };
}

export default useEditComPostHandler;
