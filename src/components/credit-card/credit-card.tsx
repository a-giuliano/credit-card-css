import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'credit-card',
  styleUrl: 'credit-card.css',
  shadow: true,
})
export class CreditCard {
  @Prop() cardNumber: string;
  @Prop() cardHolder: string;
  @Prop() expirationDate: string;
  @Prop() cvv: string;
  @Prop() gradient: 'purple' | 'green' | 'orange';

  render() {
    return (
      <Host>
        <a class="card-wrapper">
          <div class={`front ${this.gradient}`}>
            <div class="row">
              <p>Credit</p>
              <img src="https://raw.githubusercontent.com/a-giuliano/credit-card-css/master/src/assets/mastercard.png" />
            </div>
            <div class="row">
              {this.cardNumber.split(' ').map(number => (
                <p class="card-number">{number}</p>
              ))}
            </div>
            <div class="row">
              <p class="cardholder">{this.cardHolder}</p>
              <p class="exp-date">{this.expirationDate}</p>
            </div>
          </div>
          <div class={`back ${this.gradient}`}>
            <p>Security Code</p>
            <p class="cvv">{this.cvv}</p>
          </div>
        </a>
      </Host>
    );
  }
}
