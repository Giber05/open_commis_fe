import { Avatar, Comment, Divider, Rate, Row, Tooltip } from "antd";
import moment from "moment";
import React from "react";
import { ReviewModel } from "../../../../../../../guest/commission_post/data/models/review/review_model";

type ReviewProps = {
  review:ReviewModel
}
function Reviews({review}:ReviewProps) {

  return (
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
      <Divider />
    </div>
  );
}

export default Reviews;
