/**
 * Validates intake form payload
 * @param {Object} payload - The intake form data
 * @returns {{ ok: boolean, errors: string[], cleaned: Object }}
 */
export function validateIntakePayload(payload) {
  const errors = [];
  const cleaned = {};

  // fullName (required)
  if (!payload.fullName || typeof payload.fullName !== "string" || payload.fullName.trim().length === 0) {
    errors.push("fullName is required");
  } else {
    cleaned.fullName = payload.fullName.trim();
  }

  // email (required, valid format)
  if (!payload.email || typeof payload.email !== "string") {
    errors.push("email is required");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = payload.email.trim();
    if (!emailRegex.test(trimmedEmail)) {
      errors.push("email must be a valid email address");
    } else {
      cleaned.email = trimmedEmail.toLowerCase();
    }
  }

  // phone (optional)
  if (payload.phone !== undefined && payload.phone !== null) {
    if (typeof payload.phone === "string" && payload.phone.trim().length > 0) {
      cleaned.phone = payload.phone.trim();
    }
  }

  // countryTimezone (optional)
  if (payload.countryTimezone !== undefined && payload.countryTimezone !== null) {
    if (typeof payload.countryTimezone === "string" && payload.countryTimezone.trim().length > 0) {
      cleaned.countryTimezone = payload.countryTimezone.trim();
    }
  }

  // pathway (required)
  if (!payload.pathway || typeof payload.pathway !== "string" || payload.pathway.trim().length === 0) {
    errors.push("pathway is required");
  } else {
    cleaned.pathway = payload.pathway.trim();
  }

  // goal (required)
  if (!payload.goal || typeof payload.goal !== "string" || payload.goal.trim().length === 0) {
    errors.push("goal is required");
  } else {
    cleaned.goal = payload.goal.trim();
  }

  // timeline (required)
  if (!payload.timeline || typeof payload.timeline !== "string" || payload.timeline.trim().length === 0) {
    errors.push("timeline is required");
  } else {
    cleaned.timeline = payload.timeline.trim();
  }

  // budgetRange (required)
  if (!payload.budgetRange || typeof payload.budgetRange !== "string" || payload.budgetRange.trim().length === 0) {
    errors.push("budgetRange is required");
  } else {
    cleaned.budgetRange = payload.budgetRange.trim();
  }

  // canShareDocs (boolean)
  if (payload.canShareDocs !== undefined) {
    cleaned.canShareDocs = Boolean(payload.canShareDocs);
  } else {
    cleaned.canShareDocs = false;
  }

  // consent (must be true)
  if (payload.consent !== true) {
    errors.push("consent must be true");
  } else {
    cleaned.consent = true;
  }

  return {
    ok: errors.length === 0,
    errors,
    cleaned,
  };
}

