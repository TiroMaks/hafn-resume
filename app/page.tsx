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
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--hero-band-color) 40%, var(--hero-band-color) 60%, rgba(255, 255, 255, 0) 100%)"
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
              <MyBlock title="Backend-разработчик" textColor="var(--color-muted)" className="flex-1 min-w-0" titleIcon={
                <Image
                  src="/images/icons/cube.svg"
                  alt="cube icon"
                  width={24}
                  height={24}
                />
              } />
            </div>
            <div className="flex gap-[15px] w-full">
              <MyBlock title={<><span>г. Старый Оскол, ОПК СТИ НИТУ МИСИС,</span><br /><span>Информационные системы и программирование (2027г выпуска, очное)</span></>} className="w-full text-center" textColor="var(--color-muted)"/>
            </div>
            <div className="flex gap-[10px]">
              <Image
                src="/images/icons/star.svg"
                alt="star icon"
                width={24}
                height={24}
              />
              <span className="text-[17px] text-muted">Опыт работы:</span>
              <span className="text-[17px] text-emphasis font-[500]">Неофициально на заказы 2 года</span>
            </div>
            <div className="flex gap-[10px]">
              <Image
                src="/images/icons/graduation-hat.svg"
                alt="graduation-hat icon"
                width={24}
                height={24}
              />
              <span className="text-[17px] text-muted">Знание английского:</span>
              <span className="text-[17px] text-emphasis font-[500]">B1</span>
            </div>
            <div className="flex gap-[10px]">
              <Image
                src="/images/icons/grid-plus.svg"
                alt="grid-plus icon"
                width={24}
                height={24}
              />
              <span className="text-[17px] text-muted">Дополнительные курсы:</span>
              <span className="text-[17px] text-emphasis font-[500]">Веб-разработка</span>
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
                <span className="text-[17px] text-emphasis font-[500]">— Работы с Frontend</span>
                <span className="text-[11px] text-muted font-light">(Next, TypeScript, Vue, React, Tailwind CSS, JavaScript)</span>
              </div>
              <div className="flex gap-[10px] ml-[30px] items-center">
                <span className="text-[17px] text-emphasis font-[500]">— Работы с Backend</span>
                <span className="text-[11px] text-muted font-light">(Java, Spring Boot, Hibernate, Lombok, Spring Security)</span>
              </div>
              <div className="flex gap-[10px] ml-[30px] items-center">
                <span className="text-[17px] text-emphasis font-[500]">— Работы с DevOp’s</span>
                <span className="text-[11px] text-muted font-light">(Docker)</span>
              </div>
              <div className="flex gap-[10px] ml-[30px] items-center">
                <span className="text-[17px] text-emphasis font-[500]">— Знание основ Linux’а</span>
              </div>
            </div>
            <div className="flex gap-[15px] w-full">
              <MyBlock title="Vue.js" textColor="var(--skill-vue-text)" borderColor="var(--skill-vue-border)" backgroundColor="var(--skill-vue-background)" className="text-nowrap"/>
              <MyBlock title="React" textColor="var(--skill-react-text)" borderColor="var(--skill-react-border)" backgroundColor="var(--skill-react-background)" className="text-nowrap"/>
              <MyBlock title="TypeScript" textColor="var(--skill-typescript-text)" borderColor="var(--skill-typescript-border)" backgroundColor="var(--skill-typescript-background)" className="text-nowrap"/>
              <MyBlock title="Tailwind CSS" textColor="var(--skill-tailwind-text)" borderColor="var(--skill-tailwind-border)" backgroundColor="var(--skill-tailwind-background)" className="flex-1 min-w-0 text-nowrap"/>
              <MyBlock title="Custom CSS" textColor="var(--skill-custom-css-text)" borderColor="var(--skill-custom-css-border)" backgroundColor="var(--skill-custom-css-background)" className="text-nowrap"/>
            </div>
            <div className="flex gap-[15px] w-full">
              <MyBlock title="Spring Boot" textColor="var(--skill-spring-boot-text)" borderColor="var(--skill-spring-boot-border)" backgroundColor="var(--skill-spring-boot-background)" className="flex-1 min-w-0 text-nowrap"/>
              <MyBlock title="Hibernate" textColor="var(--skill-hibernate-text)" borderColor="var(--skill-hibernate-border)" backgroundColor="var(--skill-hibernate-background)" className="text-nowrap"/>
              <MyBlock title="Java" textColor="var(--skill-java-text)" borderColor="var(--skill-java-border)" backgroundColor="var(--skill-java-background)" className="text-nowrap"/>
              <MyBlock title="Spring Security" textColor="var(--skill-spring-security-text)" borderColor="var(--skill-spring-security-border)" backgroundColor="var(--skill-spring-security-background)" className="text-nowrap"/>
              <MyBlock title="Lombok" textColor="var(--skill-lombok-text)" borderColor="var(--skill-lombok-border)" backgroundColor="var(--skill-lombok-background)" className="text-nowrap"/>
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
                <span className="text-[16px] text-emphasis font-[500]">— 1 место по Профессиональному чемпионату Web-технологии</span>
                <span className="text-[11px] text-muted font-light">(регион, <a href="https://pro.firpo.ru" className="underline">подробнее</a>)</span>
              </div>
              <div className="flex gap-[10px] ml-[30px] items-center">
                <span className="text-[16px] text-emphasis font-[500]">— 12 место по Профессиональному чемпионату Web-технологии</span>
                <span className="text-[11px] text-muted font-light">(всероссийский, <a href="https://pro.firpo.ru" className="underline">подробнее</a>)</span>
              </div>
              <div className="flex gap-[10px] ml-[30px] items-center">
                <span className="text-[16px] text-emphasis font-[500]">— Диплом победителя ИТ-спринт</span>
                <span className="text-[11px] text-muted font-light">(регион, кейс от Медиа Сервис)</span>
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
              <MyBlock title="GitHub: TiroMaks" textColor="var(--contact-github-text)" borderColor="var(--contact-github-border)" backgroundColor="var(--contact-github-background)" className="text-nowrap cursor-pointer" openInNewTab="https://github.com/TiroMaks"/>
              <MyBlock title="Телеграм: @hafn_g" textColor="var(--contact-telegram-text)" borderColor="var(--contact-telegram-border)" backgroundColor="var(--contact-telegram-background)" className="flex-1 min-w-0 text-nowrap cursor-pointer" openInNewTab="https://t.me/hafn_g" />
              <MyBlock title="Почта: maksimmail6311@gmail.com" textColor="var(--contact-email-text)" borderColor="var(--contact-email-border)" backgroundColor="var(--contact-email-background)" className="text-nowrap cursor-pointer" openInNewTab="mailto:maksimmail6311@gmail.com"/>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full md:[&>*:nth-last-child(1):nth-child(odd)]:col-span-2 md:[&>*:nth-last-child(1):nth-child(odd)]:justify-self-center md:[&>*:nth-last-child(1):nth-child(odd)]:max-w-[480px]">
            <MyProject
              title="ExultantHarmony"
              description="Сайт с онлайн покупкой, личным кабинетом и админ-панелью. Написан на Vue (Custom CSS/ванильный), Spring Boot (Java) и MySQL; развернут на Docker"
              siteUrl="https://exult.fun/"
              gradientFrom="#4A0627"
              gradientTo="var(--project-gradient-to)"
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
              gradientTo="var(--project-gradient-to)"
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
            <MyProject
              title="SQLMi"
              description="Веб интерфейс для выполнения запросов к реляционным базам данных. Написан командой из 5 человек на Next, Spring Boot; развернут на Docker"
              siteUrl="https://github.com/TiroMaks/sqlmi"
              gradientFrom="#303030"
              gradientTo="var(--project-gradient-to)"
              borderColor="#B9B9B9"
              image={
              <Image
                src="/images/projects/sqlmi.png"
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
          <div
            className="w-full p-[7px] border-[3px] rounded-[14px] flex flex-col gap-0 items-center justify-center"
            style={{
              borderColor: "var(--footer-card-border)",
              backgroundColor: "var(--footer-card-background)"
            }}
          >
            <span className="font-medium text-[15px] text-[#8F90C9]">2025</span>
            <ScrollToTopLink className="font-medium text-[15px] text-muted">
              hafn.ru
            </ScrollToTopLink>
          </div>
        </div>
      </div>
    </div>
  );
}
