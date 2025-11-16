import { showAlert } from './alerts.js';

document.querySelectorAll('.delete-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const id = btn.dataset.reviewId;

    showAlert('success', 'Deleting your review...');

    try {
      const res = await axios.delete(`/api/v1/reviews/${id}`);

      if (res.status === 204) {
        showAlert('success', 'Review deleted successfully!');
        setTimeout(() => location.reload(), 1000);
      }
    } catch (err) {
      showAlert('error', 'Failed to delete review ');
    }
  });
});

const postReview = async (rating, review, tourId, userId) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:8000/api/v1/reviews',
      data: {
        rating,
        review,
        tour: tourId,
        user: userId,
      },
    });

    if (res.data.status == 'success') {
      showAlert('succrss', 'Review created successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      showAlert('error', err.response.data.message);
    } else {
      showAlert('error', 'Something went wrong while posting review.');
    }
  }
};

const reviewForm = document.querySelector('.form--review');

if (reviewForm)
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
    const tourId = document.getElementById('tourId').value;
    const userId = document.getElementById('userId').value;
    postReview(rating, review, tourId, userId);
  });
