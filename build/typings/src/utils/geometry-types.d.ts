declare const geometry: {
    cozy: {
        list: (props: import("./cozy/components/List").MyProps) => {
            hello: string;
            text: string;
        };
        dialog: typeof import("./cozy/components/Dialog");
    };
};
export { geometry };
