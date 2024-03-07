export type IImage = {
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
  url: string;
};

export type IHome = {
  _id: string;
  title: string;
  description: string;
  images: IImage[];
};

export type IMenu = {
  label: string;
  icon?: string;
  href: string;
};
