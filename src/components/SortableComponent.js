import React, { Component } from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import {
  Card,
  Image,
  Icon,

} from 'semantic-ui-react';
import { fetchCards } from '../services/cardsApi';

const SortableItem = SortableElement(({ value }) =>
(<Card>
  <Card.Content>
    <Image
      alt="Img not found"
      className="cards-image"
      src={value.image}
    />
    <Card.Meta>
      <span> {value.meta} </span>
    </Card.Meta>
    <Icon color="red" corner name="remove" />
  </Card.Content>
 </Card>));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      <h3>My favorites</h3>
      <Card.Group>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
      </Card.Group>
    </div>
  );
});



class SortableComponent extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    fetchCards()
      .then((response) => {
        response.json()
          .then((data) => {
            this.setState({ items: data.filter(cards => cards.section === "mfs") })
          });
      });
}
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList axis="x" items={this.state.items} onSortEnd={this.onSortEnd} />
  }
}
export default SortableComponent
