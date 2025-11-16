const mongoose = require('mongoose');
const dotenv = require('dotenv');
const slugify = require('slugify');
const Tour = require('../models/tourModel');
const User = require('../models/userModel.js');

dotenv.config({ path: '../config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATA_BASEPASSWORD
);

mongoose
  .connect(DB)
  .then(async () => {
    console.log('✅ Connected to DB');

    const tours = await Tour.find();
    console.log(`Found ${tours.length} tours`);

    for (let tour of tours) {
      const slug = slugify(tour.name, { lower: true });
      await Tour.updateOne({ _id: tour._id }, { slug });
      console.log(`✅ Updated: ${tour.name} → ${slug}`);
    }

    console.log('✅ All slugs updated.');
    mongoose.connection.close();
  })
  .catch((err) => console.error('❌ Connection failed:', err));
