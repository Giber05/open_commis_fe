import { DeleteFilled } from "@ant-design/icons";
import { Avatar, Button, Comment, Divider, Rate, Row, Tooltip } from "antd";
import moment from "moment";
import React from "react";
import { ReviewModel } from "../../../../../../../guest/commission_post/data/models/review/review_model";

type ReviewProps = {
  review: ReviewModel;
};
function Reviews({ review }: ReviewProps) {
  return (
    <div>
      <Row justify="space-between">
        
        <div>
          <Comment
            author={<a>{review.consumer.name}</a>}
            avatar={<Avatar src={review.consumer.profilePicture} alt={review.consumer.username} />}
            content={<p>{review.comment}</p>}
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
          <Button style={{ color: "red", borderRadius:"50%",borderColor:"red",minWidth:"60px",minHeight:"60px" }} type="dashed" size="large"  icon={<DeleteFilled  />} onClick={() => console.log("Dleet review")} />
        </div>
      </Row>
      <Divider />
    </div>
  );
}

export default Reviews;
