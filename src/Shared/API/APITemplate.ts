interface tryCatchWrapProps<T> {
  tryCallbeck: (data: T) => { success: true; data?: T };
  url: string;
  init?: RequestInit | undefined;
}
const tryCatchWrap = async <T>({
  url,
  init,
  tryCallbeck,
}: tryCatchWrapProps<T>): Promise<
  { success: true; data?: T } | { success: false; error: string }
> => {
  try {
    const response = await fetch(url, init);
    if (response.ok) {
      const json = await response.json();
      return tryCallbeck(json as T);
    } else {
      return {
        success: false,
        error: "Error loading data from API, status code: " + response.status,
      };
    }
  } catch (error) {
    console.log("error", error);

    return {
      success: false,
      error: typeof error === "string" ? error : "error",
    };
  }
};

export const apiTemplate = function <T>(url: string) {
  return {
    getList: async () => {
      return tryCatchWrap<T[]>({
        url,
        tryCallbeck: (data) => {
          return {
            success: true,
            data,
          };
        },
      });
    },

    create: async (item: T) => {
      return tryCatchWrap<T>({
        url,
        init: {
          headers: { "content-type": "application/json" },
          method: "POST",
          body: JSON.stringify(item),
        },
        tryCallbeck: (data) => {
          return {
            success: true,
            data,
          };
        },
      });
    },

    update: async (item: T, id: string) => {
      return tryCatchWrap<T>({
        url: url + "/" + id,
        init: {
          headers: { "content-type": "application/json" },
          method: "PUT",
          body: JSON.stringify(item),
        },
        tryCallbeck: (data) => {
          return {
            success: true,
            data,
          };
        },
      });
    },
    delete: async (id: string) => {
      return tryCatchWrap<T>({
        url: url + "/" + id,
        init: {
          method: "DELETE",
        },
        tryCallbeck: () => {
          return {
            success: true,
          };
        },
      });
    },
  };
};
