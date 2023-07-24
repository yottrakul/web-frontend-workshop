import MedicIcon from '@/app/assets/svgs/2/medical-student.svg';
import PeopleIcon from '@/app/assets/svgs/2/people-check.svg';
import StockIcon from '@/app/assets/svgs/2/stock.svg';
import Image from 'next/image';
export default function FeaturesMedic() {
  return (
    <section className="bg-gradient-to-r from-[#14AB9A] to-[#28BAA6] px-[8.44rem] pb-[14.56rem] pt-[12.5rem] text-white">
      <div className="container mx-auto max-w-[73.1rem]">
        <h1 className="mb-[8.75rem] flex justify-center font-poppin text-[5.625rem] font-medium leading-[5.625rem]">
          <span>Features</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-[7.5rem]">
          <div className="w-[18rem] flex-none">
            <div className="mb-[3.13rem] h-[5.25rem]">
              <Image
                src={PeopleIcon}
                alt="find a doctor"
                height={84}
                width={78.8}
              />
            </div>
            <h2 className="mb-[1.13rem] font-poppin text-[1.5rem] font-semibold leading-[1.5rem]">
              Find a Doctor
            </h2>
            <p className="font-open-sans text-[1rem] leading-[1.75rem]">
              Find new doctor and care your-self list with best care jear you..
            </p>
          </div>
          <div className="w-[18rem] flex-none">
            <div className="mb-[3.13rem] h-[5.25rem]">
              <Image
                src={StockIcon}
                alt="Estimate Your Cost"
                height={80}
                width={84}
              />
            </div>
            <h2 className="mb-[1.13rem] font-poppin text-[1.5rem] font-semibold leading-[1.5rem]">
              Estimate Your Cost
            </h2>
            <p className="font-open-sans text-[1rem] leading-[1.75rem]">
              Estimate your cost and get the best medical experiences ..
            </p>
          </div>
          <div className="w-[18rem] flex-none">
            <div className="mb-[3.13rem] h-[5.25rem]">
              <Image
                src={MedicIcon}
                alt="find a doctor"
                height={84}
                width={82.56}
              />
            </div>
            <h2 className="mb-[1.13rem] font-poppin text-[1.5rem] font-semibold leading-[1.5rem]">
              Medical Student
            </h2>
            <p className="font-open-sans text-[1rem] leading-[1.75rem]">
              Build a bettert medical student engage with our special content ..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
