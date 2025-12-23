import express from "express";
import { validateIntakePayload } from "../utils/validate.js";

const router = express.Router();

/**
 * POST /api/intakes
 * Capture intake form submission
 */
router.post("/", (req, res) => {
  const validation = validateIntakePayload(req.body);

  if (!validation.ok) {
    return res.status(400).json({ errors: validation.errors });
  }

  // Log cleaned payload
  console.log("Intake submission:", validation.cleaned);

  // TODO: Integrate with Supabase for persistence
  // TODO: Send notification email/SMS

  res.json({ ok: true });
});

export default router;

