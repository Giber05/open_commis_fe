import { Avatar, Comment, Divider, Rate, Row, Tooltip } from "antd";
import moment from "moment";
import React from "react";

function Reviews() {
  return (
    <div>
      <Comment
        author={<a>Han Solo</a>}
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        content={<p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>}
        datetime={
          <Row>
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <p>{moment().fromNow()}</p>
            </Tooltip>
            <div className="ml-7">
              <Rate disabled defaultValue={2} />
            </div>
          </Row>
        }
      />
      <Divider />
    </div>
  );
}

export default Reviews;
