import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

const UploadImage = () => {
  const [imageList, setImageList] = useState([]);
  return (
    <>
      <Upload
        accept=".jpeg,.jpg,.png"
        listType="picture"
        className="upload-list-inline"
        fileList={imageList}
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </>
  );
};
export default UploadImage;
