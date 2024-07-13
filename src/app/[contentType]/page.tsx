import ContentCard from "@/components/ContentCard";
import { getContents } from "@/request";
import { ContentType } from "@/types/content";

const ContentsPage = async ({
  params,
}: {
  params: { contentType: ContentType };
}) => {
  const { contentType } = params;
  const contents = await getContents({ type: contentType });

  return (
    <>
      <h2 className="py-4 text-lg font-semibold">
        {contentType === "post" ? "작성한 글" : "작성한 메모"}
      </h2>
      <div className="flex flex-col gap-y-6">
        {contents.map((content) => (
          <ContentCard key={content.id} {...content} />
        ))}
      </div>
    </>
  );
};

export default ContentsPage;
