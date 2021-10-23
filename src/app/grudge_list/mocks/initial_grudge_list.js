import name from "random-name";
import prettyJson from "json-pretty-html";
import { v4 as id } from "uuid";

const initial_grudge_list = [
  {
    id: id(),
    person: name(),
    reason: "Parked too close to me in the parking lot",
    forgiven: false,
  },
  {
    id: id(),
    person: name(),
    reason: "Did not brew another pot of coffee after drinking the last cup",
    forgiven: true,
  },
  {
    id: id(),
    person: name(),
    reason: "Failed to wish me a happy birthday but ate my cake",
    forgiven: false,
  },
  {
    id: id(),
    person: name(),
    reason: "Generally obnoxious and unrepentant about that fact",
    forgiven: true,
  },
  {
    id: id(),
    person: name(),
    reason: "Cut me in line at Safeway and then made eye contact",
    forgiven: false,
  },
  {
    id: id(),
    person: name(),
    reason: "Ate the last slice of pizza and left the box out",
    forgiven: false,
  },
  {
    id: id(),
    person: name(),
    reason: 'Brought "paper products" to a potluck',
    forgiven: true,
  },
  {
    id: id(),
    person: name(),
    reason: "Talked over me when I was telling a story",
    forgiven: false,
  },
  {
    id: id(),
    person: name(),
    reason: "Changed my playlist as soon as I left the room for 30 seconds",
    forgiven: false,
  },
  {
    id: id(),
    person: name(),
    reason: "Spoiled the plot line for Avengers: Endgame",
    forgiven: false,
  },
  {
    id: id(),
    person: name(),
    reason: "Ate all of the vegan ham leftovers despite being labelled",
    forgiven: false,
  },
];

export function getNewGrudge(person = "", reason = "") {
  return {
    id: id(),
    person,
    reason,
    forgiven: false,
  };
}

export default initial_grudge_list;

export const init_grudge_list_navigation = {
  past: [],
  present: initial_grudge_list,
  future: [],
};

export function PrintMockGrudgeList() {
  return (
    <div
      className="Application"
      dangerouslySetInnerHTML={{ __html: prettyJson(initial_grudge_list) }}
    ></div>
  );
}
