import { useState } from "react";
import { Paging, TextHeader } from "../../../Component";

const PagingItems = [
  {
    name: "Hỗ trợ",
  },
  {
    name: "Hướng dãn sử dụng",
  },
];
type StepType = {
  name: string;
  id: number;
  content: string;
};
const Steps: StepType[] = [
  {
    name: "Lorem ipsum dolor sit amet",
    id: 1,
    content: `<div className="flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam
              sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl
              eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada
              suspendisse gravida tortor neque quis accumsan et posuere. Ac
              turpis urna ipsum pretium nisi aenean. Facilisis scelerisque
              placerat eget lorem eget maecenas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam
              sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl
              eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada
              suspendisse gravida tortor neque quis accumsan et posuere. Ac
              turpis urna ipsum pretium nisi aenean. Facilisis scelerisque
              placerat eget lorem eget maecenas:
            </p>
            <ul className="list-disc pl-10">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam
              sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl
              eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada
              suspendisse gravida tortor neque quis accumsan et posuere. Ac
              turpis urna ipsum pretium nisi aenean. Facilisis scelerisque
              placerat eget lorem eget maecenas. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam
              sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl
              eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada
              suspendisse gravida tortor neque quis accumsan et posuere. Ac
              turpis urna ipsum pretium nisi aenean. Facilisis scelerisque
              placerat eget lorem eget maecenas. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <br/>
            <ul className="list-disc pl-10">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </li>
            </ul>
          </div>`,
  },
  {
    name: "Consectetur adipiscing elit sed do",
    id: 2,
    content: ``,
  },
  {
    name: "Iusmod tempor incididunt ut labo",
    id: 3,
    content: ``,
  },
  {
    name: "Ut enim ad minim veniam",
    id: 4,
    content: ``,
  },
  {
    name: "Quis nostrud exercitation ullamco",
    id: 5,
    content: ``,
  },
  {
    name: "Excepteur sint occaecat cupidatats",
    id: 6,
    content: ``,
  },
  {
    name: "Sunt in culpa qui officiat",
    id: 7,
    content: ``,
  },
  {
    name: "Sed ut perspiciatis unde omnis iste",
    id: 8,
    content: `<div className="flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam
              sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl
              eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada
              suspendisse gravida tortor neque quis accumsan et posuere. Ac
              turpis urna ipsum pretium nisi aenean. Facilisis scelerisque
              placerat eget lorem eget maecenas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam
              sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl
              eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada
              suspendisse gravida tortor neque quis accumsan et posuere. Ac
              turpis urna ipsum pretium nisi aenean. Facilisis scelerisque
              placerat eget lorem eget maecenas:
            </p>
            <ul className="list-disc pl-10">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam
              sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl
              eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada
              suspendisse gravida tortor neque quis accumsan et posuere. Ac
              turpis urna ipsum pretium nisi aenean. Facilisis scelerisque
              placerat eget lorem eget maecenas. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam diam
              sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl
              eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada
              suspendisse gravida tortor neque quis accumsan et posuere. Ac
              turpis urna ipsum pretium nisi aenean. Facilisis scelerisque
              placerat eget lorem eget maecenas. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <br/>
            <ul className="list-disc pl-10">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </li>
            </ul>
          </div>`,
  },
];
function AppGuide() {
  const [step, setStep] = useState<StepType>(Steps[0]);
  return (
    <div className="w-full pr-24">
      <Paging items={PagingItems} />
      <TextHeader>Hướng dẫn sử dụng</TextHeader>

      <div className="mt-10 flex w-full items-center justify-between gap-10">
        <div className="custom-scroll flex h-[810px] w-[30%]  flex-col gap-2 overflow-auto rounded-xl bg-table">
          <h5 className="bg-modal p-4 text-[24px] font-semibold">
            Danh mục hướng dẫn
          </h5>
          <ul className="p-4">
            {Steps.map((st, index) => {
              return (
                <div
                  className="group relative"
                  key={index}
                  onClick={() => setStep(st)}
                >
                  {st.id === step.id && (
                    <div className="absolute -left-[1rem] bottom-0 top-0 h-[100%] w-[4px] bg-primary"></div>
                  )}
                  <div className="absolute -left-[1rem] bottom-0 top-0 hidden h-[100%] w-[4px] cursor-pointer bg-primary transition-all group-hover:block"></div>

                  <li
                    className={`${
                      st.id === step.id ? "text-primary" : "text-white"
                    } p-2 pb-4 pt-4 font-bold `}
                  >
                    <span className="pr-4">{index}.</span>
                    <span>{st.name}</span>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="h-[810px] w-[70%] rounded-xl bg-table p-10">
          <h5 className="mb-5 mt-5 text-center text-[24px] font-semibold text-primary">
            {step.name}
          </h5>
          <div
            dangerouslySetInnerHTML={{ __html: step.content }}
            className="custom-scroll max-h-[90%] overflow-auto pb-20"
          />
        </div>
      </div>
    </div>
  );
}

export default AppGuide;
