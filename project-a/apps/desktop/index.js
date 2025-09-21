import { greet } from "@my-org/shared-greet";
import { primaryColor, bgColor, reset } from "@my-org/style";

console.log(`${bgColor}${primaryColor}`, greet("Project A") + '\n Running in Desktop App :)', `${reset}`);