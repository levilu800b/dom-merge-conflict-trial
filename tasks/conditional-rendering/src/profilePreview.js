export function ProfilePreview(previewInfo) {
  const preview = document.createElement('aside');

  if (!previewInfo.available) {
    const unavailableText = document.createElement('p');
    unavailableText.textContent = 'Profile preview unavailable.';
    preview.appendChild(unavailableText);
  } else {
    const picture = document.createElement('img');
    picture.src = previewInfo.profileInfo.pictureSrc;
    picture.alt = '';
    picture.dataset.testid = 'profilePicture';

    const name = document.createElement('p');
    name.textContent = previewInfo.profileInfo.name;
    name.dataset.testid = 'profileName';

    const bio = document.createElement('p');
    bio.textContent = previewInfo.profileInfo.bio;
    bio.dataset.testid = 'profileBio';

    preview.appendChild(picture);
    preview.appendChild(name);
    preview.appendChild(bio);
  }

  return preview;
}
