import { CommandLine } from "./commandline";

import { Product } from "./product";

export class Command {
  id: number;
  user_id: number;
  date: Date;
  adresse: string;
  postal_code: number;
  total_price: number;
  products: Product[];
  command_lines: CommandLine[];

}