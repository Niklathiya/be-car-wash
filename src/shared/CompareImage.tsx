import Image from "next/image";
import ReactCompareImage from "react-compare-image";

const CompareImage = ({
  before,
  after,
}: {
  before: string;
  after: string;
}) => {
  return (
    <div className="relative group w-full max-w-xl mx-auto">
      <Image
        src={after}
        alt="After"
        width={800}
        height={600}
        className="w-full h-auto object-cover rounded-xl"
      />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl overflow-hidden">
        <ReactCompareImage
          leftImage={before}
          rightImage={after}
          sliderLineWidth={2}
          sliderLineColor="#fff"
          handleSize={40}
        />
      </div>
    </div>
  );
};

export default CompareImage;
