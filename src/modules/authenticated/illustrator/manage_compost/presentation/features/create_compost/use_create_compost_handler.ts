import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchError } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { CategoryModel } from "../../../../../../common/commission/data/models/category_model";
import { TagModel } from "../../../../../../common/commission/data/models/tag_model";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { GetCategories } from "../../../../../../guest/commission_post/domain/usecases/get_categories";
import { CreateComPost } from "../../../domain/usecases/create_compost";
import { CreateTag } from "../../../domain/usecases/create_tag";
import { GetTags } from "../../../domain/usecases/get_tags";
import { fetchCategories, fetchTags, mergeTags, selectCreateComPost, setIsLoading, setIsLoadingTag } from "../../reducers/create_compost_slice";

type CreateComPostController = {
  isLoading: boolean;
  isLoadingTag: boolean;
  tags: TagModel[];
  getTags: () => void;
  createTag: (tagName: string) => void;
  categories: CategoryModel[];
  getCategories: () => void;
  createComPost: (event: any) => void;
};

function useCreateComPostHandler(): CreateComPostController {
  const dispatch = useAppDispatch();
  const { isLoading, tags, isLoadingTag, categories } = useSelector(selectCreateComPost);
  const { authUser } = useSelector(selectAuth);
  const navigate = useNavigate()
  const getTagsUC = new GetTags();
  const createTagUC = new CreateTag();
  const getCategoriesUC = new GetCategories();
  const createComPostUC = new CreateComPost();


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
    dispatch(setIsLoadingTag(true));
    setTimeout(async () => {
      const resource = await createTagUC.execute({ token: authUser?.data.token!, tagName: tagName });

      dispatch(setIsLoadingTag(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(mergeTags(value.data));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };
  const createComPost = (event: any) => {
    let imageFiles = event.upload_image.map((file: any) => file.originFileObj);
    let commission = event.compost;

    const formData = new FormData();
    imageFiles.forEach((image: any) => {
      formData.append("images", image);
    });
    formData.append("title", commission.title,);
    formData.append("description", commission.description,);
    formData.append("duration", commission.duration.toString());
    formData.append("price", commission.price.toString());
    formData.append("category", commission.category);
    commission.tags.forEach((tag:any) => {
      formData.append("tags[]", tag.toString());
    });

    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await createComPostUC.execute({
        token: authUser?.data.token!,
        formData:formData
      });

      dispatch(setIsLoading(false));
      resource.whenWithResult({
        success: (value) => {
          setTimeout(() => {
            message.success(value.data.message)
          }, 2000);
          navigate("/manage/manage-compost")
        },
        error: (error) => {
          setTimeout(() => {
            message.success(error.exception.message)
          }, 2000);
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
    createComPost,
  };
}

export default useCreateComPostHandler;
