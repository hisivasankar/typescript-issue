declare const geometry: {
    cozy: {
        list: (props: import("utils/cozy/components/List").MyProps) => {
            hello: string;
            text: string;
        };
        dialog: typeof import("utils/cozy/components/Dialog");
    };
};
export { geometry };
