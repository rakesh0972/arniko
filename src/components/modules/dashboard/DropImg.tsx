import { Dropzone } from "@mantine/dropzone";

const DropImg = () => {
  const handleDrop = () => {
    alert("image dropped");
  };
  return (
    <div className="my-md">
      <Dropzone
        accept={["image/png", "image/jpeg", "image/sgv+xml", "image/gif"]}
        onDrop={handleDrop}
        className=" sm:w-[20%] "
      >
        <p className="text-hr">Upload images</p>
      </Dropzone>
    </div>
  );
};

export default DropImg;
