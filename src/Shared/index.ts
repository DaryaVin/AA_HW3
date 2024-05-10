import { Select } from "./UI/Select/ui";
import { Input } from "./UI/Input/ui";
import { Form } from "./UI/Form/ui";
import { Button } from "./UI/Button/ui";
import { ColorSelect } from "./UI/ColorSelect/ui";
import { ValidationWrap } from "./UI/ValidationWrap/ui";
import { Modal } from "./UI/Modal/ui";
import { SelectWithFilter } from "./UI/SelectWithFilter/ui";

import { apiTemplate } from "./API/APITemplate";

import { setupStore, useAppDispatch, useAppSelector } from "./Store/store";
import type { RootState, AppStore, AppDispatch } from "./Store/store";

export {
  SelectWithFilter,
  Select,
  Input,
  Form,
  Button,
  ColorSelect,
  ValidationWrap,
  Modal,
  apiTemplate,
};

export { setupStore, useAppDispatch, useAppSelector };
export type { RootState, AppStore, AppDispatch };
