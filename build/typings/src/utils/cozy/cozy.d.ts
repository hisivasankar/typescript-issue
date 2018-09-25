import * as dialog from "./components/Dialog";
declare const cozy: {
    list: (props: import("utils/cozy/components/List").MyProps) => {
        hello: string;
        text: string;
    };
    dialog: typeof dialog;
};
export { cozy };
