import { showAlert } from './alerts.js';

const stripe = Stripe(
  'pk_test_51SR3eaFi2cnWtHwJEGF1QGFLIAfepB9moi6wFQg7LZ31nxvLK0FY2XU5Pj0EHFFQ8jkJE0fg1KF0D1hZqaXN8tC30086ykdp2t'
);

export const bookTour = async (tourID) => {
  try {
    //1 get checkout session from api
    const session = await axios(`/api/v1/bookings/checkout-session/${tourID}`);
    //2 create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

const bookBtn = document.getElementById('book-tour');

if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const tourID = e.target.dataset.tourId;
    bookTour(tourID);
  });
}
