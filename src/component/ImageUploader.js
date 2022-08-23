import React from "react";
import { styled } from "@mui/system";

const LabelImg = styled("label")`
  cursor: pointer;
`;

const ImageUploader = ({ children, setImageUrl,updateImg }) => {
  const imgHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageUrl(reader.result);
        updateImg()
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <LabelImg htmlFor="upload-image">{children}</LabelImg>
      <input
        type="file"
        name="upload image"
        id="upload-image"
        accept="image/*"
        style={{ display: "none" }}
        onChange={imgHandler}
      />
    </>
  );
};

export default ImageUploader;
