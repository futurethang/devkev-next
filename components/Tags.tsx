import { Post } from "@/app/page";

export const Tags = ({ tags }: { tags: Post["tags"] }) => {
  return (
    <div className="flex gap-2 grow">
      {tags.map((tag, index: number) => {
        return (
          <span
            key={index}
            className="p-1 px-2 bg-slate-400 text-slate-900 text-xs rounded self-end"
          >
            {tag.title}
          </span>
        );
      })}
    </div>
  );
};
