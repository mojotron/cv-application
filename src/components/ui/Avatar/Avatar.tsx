type PropsType = {
  imageUrl: string;
  alt: string;
};

function Avatar({ imageUrl, alt }: PropsType) {
  return (
    <img
      className="h-[150px] w-[150px] rounded-full"
      src={imageUrl}
      alt={alt}
    />
  );
}

export default Avatar;
