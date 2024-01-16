import { useEffect, useState } from "react";
import { DropDown, Paging, TextHeader, TextLabel } from "../../../Component";
import { themeConfigs } from "../../../assets/img/themeimg";
import { ArrowLeftIcon, SuccessIcon } from "../../../assets/icon";
import ArrowRight from "../../../assets/icon/arrow_right";

const PagingItems = [
  {
    name: "Cài đặt",
  },
  {
    name: "Cài đặt hệ thống",
  },
];

const DropDownItems = [
  {
    name: "Tiếng Việt",
    key: 1,
  },
  {
    name: "Tiếng Anh",
    key: 2,
  },
];
function Config() {
  const [isNotification, setIsNotification] = useState<boolean>(false);
  const [themes, setThemes] = useState<{ link: string; name: string }[]>(
    themeConfigs.map((theme, index) => {
      return {
        link: theme,
        name: "Theme" + (index + 2),
      };
    }),
  );
  const [themeImg, setThemeImg] = useState<{
    link: string;
    name: string;
  }>({
    name: "Theme 1",
    link: themeConfigs[0],
  });
  const handleNextTheme = () => {
    const themeActive = themes[0];
    const updatedThemes = [...themes.slice(1), themeActive];
    setThemes(updatedThemes);
    setThemeImg(updatedThemes[0]);
    setIsNotification(true);
  };

  const handlePreviousTheme = () => {
    const themeActive = themes[themes.length - 1];
    const updatedThemes = [themeActive, ...themes.slice(0, themes.length - 1)];
    setThemes(updatedThemes);
    setThemeImg(updatedThemes[0]);
    setIsNotification(true);
  };

  const handleChooseTheme = (theme: { name: string; link: string }) => {
    setIsNotification(true);
    const indexThemeSelect = themes.findIndex((t) => t.link === theme.link);
    const themeActive = themes[indexThemeSelect];
    const updatedThemes = [
      themeActive,
      ...themes.slice(indexThemeSelect + 1, themes.length),
      ...themes.slice(0, indexThemeSelect),
    ];
    setThemes(updatedThemes);
    setThemeImg(updatedThemes[0]);
  };

  useEffect(() => {
    let countNotification: NodeJS.Timeout;

    if (isNotification) {
      countNotification = setTimeout(() => {
        setIsNotification(false);
      }, 1000);
    }

    return () => {
      clearTimeout(countNotification);
    };
  }, [isNotification]);

  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Cài đặt cấu hình</TextHeader>

      <div className="mt-10 flex w-full items-center justify-start gap-24">
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            className="h-[320px] w-[571px] rounded-2xl"
            src={themeImg.link}
          />
          <h5>{themeImg.name}</h5>
        </div>
        <div className="flex items-center  gap-10">
          <ArrowLeftIcon onClick={handleNextTheme} />
          {themes.map((theme: { name: string; link: string }, index) => {
            return (
              theme.link !== themeImg.link && (
                <div
                  onClick={() => {
                    handleChooseTheme(theme);
                  }}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <img
                    className="h-[160px] w-[240px] rounded-2xl"
                    src={theme.link}
                    key={index}
                  />
                  <h5>{theme.name}</h5>
                </div>
              )
            );
          })}
          <ArrowRight onClick={handlePreviousTheme} />
        </div>
      </div>

      <div className="box-start mt-5 gap-4">
        <TextLabel>Ngôn ngữ hiển thị:</TextLabel>
        <DropDown
          classDropItem="border-second w-[246px] bg-input"
          active={DropDownItems[0]}
          dropItems={DropDownItems}
          onSelect={(val) => console.log(val)}
        />
      </div>
      {isNotification && (
        <div className="fixed bottom-10 left-1/2 flex h-fit w-[] -translate-x-1/2 items-center justify-center rounded-[12px] bg-toast pb-[16px] pl-[24px] pr-[24px] pt-[16px] transition-all">
          <SuccessIcon />
          <h6 className="ml-[16px] text-[18px] font-medium">
            Đổi theme thành công!
          </h6>
        </div>
      )}
    </div>
  );
}

export default Config;
