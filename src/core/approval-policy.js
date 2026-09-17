const SENSITIVE_PATTERNS = [
  /send\s+(an?\s+)?email/i,
  /publish/i,
  /post\s+(to|on)/i,
  /apply\s+(for|to)/i,
  /purchase|buy|pay|payment|checkout/i,
  /delete|remove|destroy/i,
  /change\s+(password|security|account)/i,
];

export function requiresApproval(action) {
  if (!action || typeof action !== 'string') return true;
  return SENSITIVE_PATTERNS.some((pattern) => pattern.test(action));
}

export function approvalDecision(action, approved = false) {
  const required = requiresApproval(action);
  return {
    action,
    required,
    approved: Boolean(approved),
    allowed: !required || Boolean(approved),
  };
}
