/* eslint-disable camelcase */

const findRocket = (rockets, rocketId) => rockets.find(rocket => rocket.rocket_id === rocketId );

export const processLaunches = (launches, rockets) => launches.map(launch => {
  const { flight_number, mission_name, rocket: { rocket_name, rocket_id, second_stage: { payloads } } } = launch;
  const foundRocket = findRocket(rockets, rocket_id);
  const { description, flickr_images: images} = foundRocket;

  const outputPayloads = payloads.map(payload => {
    const { payload_id, manufacturer, payload_type: type } = payload;

    return { payload_id, manufacturer, type };
  });

  return {
    flight_number,
    mission_name,
    rocket: {
      rocket_id,
      rocket_name,
      description,
      images
    },
    payloads: outputPayloads
  };
});
