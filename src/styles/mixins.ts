import { css } from "styled-components";
import { flexBoxType } from "./styleTypes";

export const FlexBox =({
    direction = "row",
    justify = "center",
    align = "center",
    gap = "0px",
    wrap = "nowrap"
}: flexBoxType = {})=> css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${wrap};
    gap: ${gap};
`