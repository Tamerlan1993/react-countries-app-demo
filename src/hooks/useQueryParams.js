import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export function useQueryParams() {

    const [searchParams, setSearchParams] = useSearchParams();
    let currentParams = useMemo(() => Object.fromEntries(searchParams), [searchParams]);

    return [
        currentParams,
        (values = {}) => {

            let query = Object.fromEntries(
                Object.entries(
                    {
                        ...currentParams,
                        ...values
                    }
                ).filter(([, value]) => {
                    return value !== "" && value !== undefined && value !== null
                })
            )
            setSearchParams(query)
        }
    ]
}
