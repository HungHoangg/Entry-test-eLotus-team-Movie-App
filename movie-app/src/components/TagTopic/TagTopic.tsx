import React from "react";
import "./TagTopic.scss";

interface TagTopicProps {
  label?: string;
  value: string | number; 
  variant?: "imdb" | "adult" | "basic-tag" | "genre"; 
}

const TagTopic: React.FC<TagTopicProps> = ({
  label,
  value,
  variant = "",
}) => {
  return (
    <div className={`tag-topic tag-topic--${variant}`}>
      {label && <span className="tag-topic__label">{label}&nbsp;</span>}
      <span className="tag-topic__value">{value}</span>
    </div>
  );
};

export default TagTopic;
