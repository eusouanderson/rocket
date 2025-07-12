import Lib from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

Lib.locale("pt-BR");
Lib.extend(relativeTime);

export const dayjs = Lib;
