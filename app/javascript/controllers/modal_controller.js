import { Controller } from "@hotwired/stimulus"
import { enter, leave } from 'el-transition'

export default class extends Controller {

  connect() {
    enter(document.getElementById('modal-wrapper'));

    document.getElementById('modal-main').addEventListener('click', this.closeModal); 
  }

  closeModal(event) {
    const modalClicked = document.getElementById('modal-main').contains(event.target);

    if (modalClicked) {
      leave(document.getElementById('modal-wrapper'));
      leave(document.getElementById('modal-main'));
    }
  }
}
