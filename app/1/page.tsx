import BuildingIcon from '@/app/assets/svgs/how-it-works/building-icon.svg';
import HandIcon from '@/app/assets/svgs/how-it-works/hand-icon.svg';
import SearchIcon from '@/app/assets/svgs/how-it-works/search-icon.svg';
import Image from 'next/image';
export default function HowItWork() {
  return (
    <section className=" px-[8.44rem] pb-[14.12rem] pt-[16.06rem]">
      <div className="container mx-auto max-w-[73.1rem]">
        <h1 className="mb-[3.38rem] flex justify-center whitespace-nowrap font-manrope text-[2.5rem] font-semibold leading-normal">
          <span>How it works?</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-[10rem]">
          <div className="w-[16.3rem] flex-none">
            <div className="mb-[3.13rem]">
              <Image
                className="mx-auto"
                src={SearchIcon}
                alt="search-icon"
                width={90}
                height={90}
              />
            </div>
            <h2 className="mb-[0.94rem] text-center font-manrope text-[1.375rem] font-semibold leading-normal">
              Research Suburbs
            </h2>
            <p className="text-center font-roboto text-[1rem] font-normal leading-[1.625rem] text-[#333333]">
              Get started swiftly & easily by importing a demo of your choice in
              a single click.
            </p>
          </div>
          <div className="w-[16.3rem] flex-none">
            <div className="mb-[3.13rem]">
              <Image
                className="mx-auto"
                src={HandIcon}
                alt="search-icon"
                width={90}
                height={90}
              />
            </div>
            <h2 className="mb-[0.94rem] text-center font-manrope text-[1.375rem] font-semibold leading-normal">
              Instant Valuation
            </h2>
            <p className="text-center font-roboto text-[1rem] font-normal leading-[1.625rem] text-[#333333]">
              Over 30 high quality profession designed re-built website concepts
              to choose from.
            </p>
          </div>
          <div className="w-[16.3rem] flex-none">
            <div className="mb-[3.13rem]">
              <Image
                className="mx-auto"
                src={BuildingIcon}
                alt="search-icon"
                width={90}
                height={90}
              />
            </div>
            <h2 className="mb-[0.94rem] text-center font-manrope text-[1.375rem] font-semibold leading-normal">
              Track Property
            </h2>
            <p className="text-center font-roboto text-[1rem] font-normal leading-[1.625rem] text-[#333333]">
              Build your website using fully visual interface, using our
              revolutionary page builder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
