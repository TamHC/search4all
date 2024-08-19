const cn = {
  Err: {
    429: "請求過於頻繁，請稍後再試",
    500: "抱歉，我們可能負載過重，請稍後再試。",
  },
  Title: {
    home: "首頁",
  },
  Search: {
    placeholder: "有問必答...",
  },
  Footer: {
    statement: "這是由大語言模型提供的答案, 請務必核實正確性。",
  },
  Relates: {
    no_related_questions: "沒有相關問題。",
    related: "相關",
  },
  Answer: {
    answer: "答案",
  },
  Sources: {
    sources: "來源",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof cn;
export type PartialLocaleType = DeepPartial<typeof cn>;

export default cn;
