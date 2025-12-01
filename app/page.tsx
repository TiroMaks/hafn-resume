import Image from "next/image";
import DotBackground from "./components/DotBackground";
import MyCard from "./components/MyCard";
import Typewriter from "./components/Typewriter";
import MyBlock from "./components/MyBlock";
import MyProject from "./components/MyProject";
import ScrollToTopLink from "./components/ScrollToTopLink";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen relative w-full">
      <DotBackground />
      <div className="w-full mt-[150px] mb-[25px] flex flex-col items-center">
        <div
          className="py-[60px] flex items-center justify-center w-[100vw] left-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, #0A0A0A 40%, #0A0A0A 60%, rgba(10, 10, 10, 0) 100%)"
          }}
        >
          <Typewriter texts={["Привет!", "Hello!"]} />
        </div>

        <MyCard title="Обо мне" className="max-w-[1000px]" id="about" content={
          <div className="flex flex-col gap-[15px] w-full">
            <div className="flex gap-[15px] w-full">
              <MyBlock title="18 лет" textColor="#B2C09E" titleIcon={
                <Image
                  src="/images/icons/card.svg"
                  alt="card icon"
                  width={24}
                  height={24}
                />
              } />
              <MyBlock title="он/его" textColor="#8F90C9" titleIcon={
                <Image
                  src="/images/icons/badge.svg"
                  alt="badge icon"
                  width={24}
                  height={24}
                />
              } />
              <MyBlock title="Русский" textColor="#C99382" titleIcon={
                <Image
                  src="/images/icons/globe.svg"
                  alt="globe icon"
                  width={24}
                  height={24}
                />
              } />
              <MyBlock title="Backend-разработчик" textColor="#B4B4B4" className="flex-1 min-w-0" titleIcon={
                <Image
                  src="/images/icons/cube.svg"
                  alt="cube icon"
                  width={24}
                  height={24}
                />
              } />
            </div>
            <div className="flex gap-[15px] w-full">
              <MyBlock title={<><span>г. Старый Оскол, ОПК СТИ НИТУ МИСИС,</span><br /><span>Информационные системы и программирование (2027г выпуска, очное)</span></>} className="w-full text-center" textColor="#B4B4B4"/>
            </div>
            <div className="flex gap-[10px]">
              <Image
                src="/images/icons/star.svg"
                alt="star icon"
                width={24}
                height={24}
              />
              <span className="text-[17px] text-[#B4B4B4]">Опыт работы:</span>
              <span className="text-[17px] text-[#EBEBEB] font-[500]">Неофициально на заказы 2 года</span>
            </div>
            <div className="flex gap-[10px]">
              <Image
                src="/images/icons/graduation-hat.svg"
                alt="graduation-hat icon"
                width={24}
                height={24}
              />
              <span className="text-[17px] text-[#B4B4B4]">Знание английского:</span>
              <span className="text-[17px] text-[#EBEBEB] font-[500]">B1</span>
            </div>
            <div className="flex gap-[10px]">
              <Image
                src="/images/icons/grid-plus.svg"
                alt="grid-plus icon"
                width={24}
                height={24}
              />
              <span className="text-[17px] text-[#B4B4B4]">Дополнительные курсы:</span>
              <span className="text-[17px] text-[#EBEBEB] font-[500]">Веб-разработка</span>
            </div>
          </div>
        } titleIcon={
          <Image
            src="/images/icons/user.svg"
            alt="User icon"
            width={24}
            height={24}
          />
        } />

        <MyCard title="Навыки" className="max-w-[1000px] mt-[45px]" id="skills" content={
          <div className="flex flex-col gap-[15px] w-full">
            <div className="flex flex-col gap-[5px]">
              <div className="flex gap-[10px] ml-[30px] items-center">
                <span className="text-[17px] text-[#EBEBEB] font-[500]">— Работы с Frontend</span>
                <span className="text-[11px] text-[#B4B4B4] font-light">(Next, TypeScript, Vue, React, Tailwind CSS, JavaScript)</span>
              </div>
              <div className="flex gap-[10px] ml-[30px] items-center">
                <span className="text-[17px] text-[#EBEBEB] font-[500]">— Работы с Backend</span>
                <span className="text-[11px] text-[#B4B4B4] font-light">(Java, Spring Boot, Hibernate, Lombok, Spring Security)</span>
              </div>
              <div className="flex gap-[10px] ml-[30px] items-center">
                <span className="text-[17px] text-[#EBEBEB] font-[500]">— Работы с DevOp’s</span>
                <span className="text-[11px] text-[#B4B4B4] font-light">(Docker)</span>
              </div>
              <div className="flex gap-[10px] ml-[30px] items-center">
                <span className="text-[17px] text-[#EBEBEB] font-[500]">— Знание основ Linux’а</span>
              </div>
            </div>
            <div className="flex gap-[15px] w-full">
              <MyBlock title="Vue.js" textColor="#56BC8E" borderColor="#56BC8E" backgroundColor="#193227" className="text-nowrap"/>
              <MyBlock title="React" textColor="#69D5F3" borderColor="#69D5F3" backgroundColor="#23444D" className="text-nowrap"/>
              <MyBlock title="TypeScript" textColor="#3E7DC3" borderColor="#3E7DC3" backgroundColor="#1E2D3F" className="text-nowrap"/>
              <MyBlock title="Tailwind CSS" textColor="#B9B9B9" borderColor="#B9B9B9" backgroundColor="#3F3F3F" className="flex-1 min-w-0 text-nowrap"/>
              <MyBlock title="Custom CSS" textColor="#2478B5" borderColor="#2478B5" backgroundColor="#0C293F" className="text-nowrap"/>
            </div>
            <div className="flex gap-[15px] w-full">
              <MyBlock title="Spring Boot" textColor="#73B24A" borderColor="#73B24A" backgroundColor="#263B18" className="flex-1 min-w-0 text-nowrap"/>
              <MyBlock title="Hibernate" textColor="#8CA2AD" borderColor="#8CA2AD" backgroundColor="#3A4246" className="text-nowrap"/>
              <MyBlock title="Java" textColor="#F73A2E" borderColor="#F73A2E" backgroundColor="#3C0E0B" className="text-nowrap"/>
              <MyBlock title="Spring Security" textColor="#42A47E" borderColor="#42A47E" backgroundColor="#193B2E" className="text-nowrap"/>
              <MyBlock title="Lombok" textColor="#BDBDBD" borderColor="#3D3D3D" backgroundColor="#101010" className="text-nowrap"/>
            </div>
          </div>
        } titleIcon={
          <Image
            src="/images/icons/bug.svg"
            alt="bug icon"
            width={24}
            height={24}
          />
        } />

        <MyCard title="Профессиональные грамоты:" className="max-w-[1000px] mt-[45px]" id="certificates" content={
          <div className="flex flex-col gap-[15px] w-full">
            <div className="flex flex-col gap-[5px]">
              <div className="flex gap-[10px] ml-[30px] items-center">
                <span className="text-[16px] text-[#EBEBEB] font-[500]">— 1 место по Профессиональному чемпионату Web-технологии</span>
                <span className="text-[11px] text-[#B4B4B4] font-light">(регион, <a href="https://pro.firpo.ru" className="underline">подробнее</a>)</span>
              </div>
              <div className="flex gap-[10px] ml-[30px] items-center">
                <span className="text-[16px] text-[#EBEBEB] font-[500]">— 12 место по Профессиональному чемпионату Web-технологии</span>
                <span className="text-[11px] text-[#B4B4B4] font-light">(всероссийский, <a href="https://pro.firpo.ru" className="underline">подробнее</a>)</span>
              </div>
              <div className="flex gap-[10px] ml-[30px] items-center">
                <span className="text-[16px] text-[#EBEBEB] font-[500]">— Диплом победителя ИТ-спринт</span>
                <span className="text-[11px] text-[#B4B4B4] font-light">(регион, кейс от Медиа Сервис)</span>
              </div>
            </div>
          </div>
        } titleIcon={
          <Image
            src="/images/icons/restaurant.svg"
            alt="restaurant icon"
            width={24}
            height={24}
          />
        } />

        <MyCard title="Связь со мной:" className="max-w-[1000px] mt-[45px]" id="contact" content={
          <div className="flex flex-col gap-[15px] w-full">
            <div className="flex gap-[15px] w-full">
              <MyBlock title="GitHub: TiroMaks" textColor="#B4B4B4" borderColor="#B4B4B4" backgroundColor="#383838" className="text-nowrap cursor-pointer" openInNewTab="https://github.com/TiroMaks"/>
              <MyBlock title="Телеграм: @hafn_g" textColor="#34A6DE" borderColor="#34A6DE" backgroundColor="#0E3243" className="flex-1 min-w-0 text-nowrap cursor-pointer" openInNewTab="https://t.me/hafn_g" />
              <MyBlock title="Почта: maksimmail6311@gmail.com" textColor="#CE5343" borderColor="#CE5343" backgroundColor="#371713" className="text-nowrap cursor-pointer" openInNewTab="mailto:maksimmail6311@gmail.com"/>
            </div>
          </div>
        } titleIcon={
          <Image
            src="/images/icons/link.svg"
            alt="link icon"
            width={24}
            height={24}
          />
        } />

        <MyCard title="Проекты:" className="max-w-[1000px] mt-[45px]" id="projects" content={
          <div className="grid grid-cols-2 gap-[20px] w-full">
            <MyProject
              title="ExultantHarmony"
              description="Сайт с онлайн покупкой, личным кабинетом и админ-панелью. Написан на Vue (Custom CSS/ванильный), Spring Boot (Java) и MySQL; развернут на Docker"
              siteUrl="https://exult.fun/"
              gradientFrom="#4A0627"
              gradientTo="#0A0A0A"
              borderColor="#7E2757"
              image={
              <Image
                src="/images/projects/exult.png"
                alt="Project image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              }
            />
            <MyProject
              title="Istitchlab"
              description="Сайт медицинской тематики с возможностью заказа тренажеров и записью на курсы (с админ панелью). Написан на React (Tailwind), Express (Node.js) и PostgreSQL; развернут на Docker"
              siteUrl="https://istitchlab.ru/"
              gradientFrom="#044056"
              gradientTo="#0A0A0A"
              borderColor="#0A9ED2"
              image={
              <Image
                src="/images/projects/istitchlab.png"
                alt="Project image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              }
            />
          </div>
        } titleIcon={
          <Image
            src="/images/icons/columns-3.svg"
            alt="link icon"
            width={24}
            height={24}
          />
        } />

        <div className="w-full max-w-[1000px] mt-[45px] flex flex-col items-center">
          <div className="w-full p-[7px] border-[3px] border-[#141414] bg-[#0A0A0A] rounded-[14px] flex flex-col gap-0 items-center justify-center">
            <span className="font-medium text-[15px] text-[#8F90C9]">2025</span>
            <ScrollToTopLink className="font-medium text-[15px] text-[#4E4E5B]">
              hafn.ru
            </ScrollToTopLink>
          </div>
        </div>
      </div>
    </div>
  );
}
