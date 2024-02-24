# Conditional Rendering

This component is currently a profile preview showing a person's image, name, and bio.
The argument previewInfo is an object of form:

```
{
    available : Boolean,
    shortForm : Boolean,
    profileInfo : {
        pictureSrc : String,
        name : String,
        bio : String
    }
}
```

## Task for Person 1

Create and switch to a new branch named `preview-not-available`:

```
git switch -c preview-not-available
```

Unskip the tests describing the available option. Update the component so that when the preview is not available, none of the profile information renders and instead a text saying "Profile preview unavailable." is rendered. Otherwise render all the profile information.

## Task for Person 2

Create and switch to a new branch named `preview-short-form`:

```
git switch -c preview-short-from
```

Unskip the tests describing the short form option. Update the component so that when the preview is in short form, the profile bio is not rendered. Otherwise continue to render the profile bio.
