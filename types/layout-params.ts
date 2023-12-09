import { type PropsWithChildren } from "react"

type ValidParams = {
    [key: string]: string | string[]
}

export type LayoutParams<TParams extends ValidParams> = PropsWithChildren<{ params: TParams }>
