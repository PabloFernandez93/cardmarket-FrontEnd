import {Language} from "./Language";
import {Card} from "./Card";

export interface Article {

  id: number
  price: number
  condition: string
  language: Language
  cardId: Card

}
