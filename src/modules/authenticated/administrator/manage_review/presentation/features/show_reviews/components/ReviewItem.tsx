import { DeleteFilled, QuestionCircleOutlined } from "@ant-design/icons";
import { Avatar, Button, Comment, Divider, Popconfirm, Rate, Row, Tooltip } from "antd";
import moment from "moment";
import React from "react";
import AssetConstants from "../../../../../../../../core/constants/asset_constants";
import { ReviewList } from "../../../../../../../common/reviews/data/models/review_list";
import { ReviewModel } from "../../../../../../../guest/commission_post/data/models/review/review_model";
import useReviewListHandler from "../use_review_list_handler";

type ReviewProps = {
  review: ReviewList;
};
function ReviewItem({ review }: ReviewProps) {
  const { deleteReview } = useReviewListHandler();
  return (
    <div>
      <Row justify="space-between">
        <div>
          <Comment
            author={<a>{review.consumer.name}</a>}
            avatar={<Avatar src={review?.consumer?.profilePicture == null ? AssetConstants.imageURL + "placeholder/profile_placeholder.png" : review?.consumer?.profilePicture} alt={review.consumer.username} />}
            content={review?.visible ? <p>{review.comment}</p> : <p className="line-through">{review.comment}</p>}
            datetime={
              <Row>
                <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                  <p>{moment(review.createdAt).fromNow()}</p>
                </Tooltip>
                <div className="ml-7">
                  <Rate disabled defaultValue={review.rating} />
                </div>
              </Row>
            }
          />
        </div>
        <div className="my-auto mx-3">
          <Popconfirm disabled={!review.visible ? true : false} icon={<QuestionCircleOutlined style={{ color: "red" }} />} title="Apakah Anda yakin akan menghapus ulasan ini?" placement="leftTop" onConfirm={(e) => deleteReview(review.id)}>
            <div className="text-center mx-auto">
              <Button style={{ color: review.visible ? "red" : "gray", borderRadius: "50%", borderColor: review.visible ? "red" : "gray", minWidth: "60px", minHeight: "60px" }} type="dashed" size="large" icon={<DeleteFilled />} />
            </div>
          </Popconfirm>
        </div>
      </Row>
      <Divider />
    </div>
  );
}

export default ReviewItem;
