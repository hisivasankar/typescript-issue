export interface MyProps {
    text: string;
    hello: string;
}
declare const list: (props: MyProps) => {
    hello: string;
    text: string;
};
export { list };
