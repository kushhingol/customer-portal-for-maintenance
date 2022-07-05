export type Column = {
    name: string,
    selector: (row: any) => any
}