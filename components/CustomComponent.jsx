import Image from 'next/image';

export const CustomComponent = ()=> {
  return (
    <div className="relative flex justify-center items-center h-[400px] bg-white">
      {/* Base Image */}
      <Image src="" alt="Base Image" layout="fill" objectFit="cover" quality={100} />

      {/* Text and Overlay Images */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-9xl font-bold text-black relative">
          JOBMI
          {/* Overlay Images */}
          <Image src="/media/carr.png" alt="Overlay Image 1" className="absolute mt-[-100px]" width={100} height={100} />
          <Image src="/media/Group307.png" alt="Overlay Image 2" className="absolute mt-[-40px]" width={70} height={70} />
          <Image src="/media/carr2.png" alt="Overlay Image 3" className="absolute ml-[180px] mt-[-40px]" width={100} height={100} />
          <Image src="/media/carr3.png" alt="Overlay Image 4" className="absolute ml-[370px] mt-[-110px]" width={120} height={100} />
          <Image src="/media/Group2306.png" alt="Overlay Image 5" className="absolute ml-[360px] mt-[-20px]" width={70} height={70} />
        </h1>
      </div>
    </div>
  );
}
