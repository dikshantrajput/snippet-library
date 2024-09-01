import type { ComponentType } from "svelte";
import { toast, type ExternalToast } from "svelte-sonner";

type PromiseT<Data = unknown> = Promise<Data> | (() => Promise<Data>);
type PromiseData<ToastData = unknown> = ExternalToast & {
	loading?: string | ComponentType;
	success?: string | ComponentType | ((data: ToastData) => ComponentType | string);
	error?: string | ComponentType | ((error: unknown) => ComponentType | string);
	finally?: () => void | Promise<void>;
};

export const showSuccessToast = (text: string, options?: PromiseData) => {
	toast.success(text, options);
};

export const showErrorToast = (text: string, options?: PromiseData) => {
	toast.error(text, options);
};

export const showLoadingToast = (text: string, options?: PromiseData) => {
	toast.loading(text, options);
};

export const showAutoSaveSuccessToast = (text: string, options?: PromiseData) => {
	toast.info(text, options);
};

export const showAsyncToast = (promise: PromiseT<void>, options: PromiseData) => {
	toast.promise(promise, options);
};
