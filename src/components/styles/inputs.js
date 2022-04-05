
import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledTextField = styled(TextField)`
    & {
        & .MuiOutlinedInput-notchedOutline {
            border: 1px solid white;
        }
    }
`
