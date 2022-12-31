import {Language} from "./Language";
import {Card} from "./Card";
import {Condition} from "./Condition";

export interface Article {

  id: number
  price: number
  condition: Condition
  language: Language
  card: Card

}
