import type { ComponentType } from "svelte";
import { toast, type ExternalToast } from "svelte-sonner";
export type PromiseT<Data = unknown> = Promise<Data> | (() => Promise<Data>);
export type PromiseData<ToastData = unknown> = ExternalToast & {
	loading?: string | ComponentType;
	success?: string | ComponentType | ((data: ToastData) => ComponentType | string);
	error?: string | ComponentType | ((error: unknown) => ComponentType | string);
	finally?: () => void | Promise<void>;
};

export const showSuccessToast = (text: string) => {
	toast.success(text);
};

export const showErrorToast = (text: string) => {
	toast.error(text);
};

export const showLoadingToast = (text: string) => {
	toast.loading(text);
};

export const showAutoSaveSuccessToast = (text: string) => {
	toast.info(text);
};

export const showAsyncToast = (promise: PromiseT<void>, options: PromiseData) => {
	toast.promise(promise, options);
};
